
let tasks = [];
function register_task (fn) {
  tasks.push(fn);
}

//////////////////////////////////////
// D3'Classes' and methods
//////////////////////////////////////

// Canvas variables
const MARGIN = 0.1;
const WIDTH = 600;
const HEIGHT = 800;
const DEPTH = 10;


// We assume that pos is normalized to [0, 1]
function Pos (n, x, y, z) {
  let bb = d3.select(get_canvas(n)).node().getBoundingClientRect();
  this.x = (bb.width * (1 - (2 * MARGIN))) * (x + MARGIN);
  this.y = (bb.height * (1 - (2 * MARGIN))) * (1.0 - y + MARGIN);
  this.z = z;
}

// We keep this value as is
function Pt (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

function DataPoint (canvas, type, pos, size, color) {
  this.canvas = canvas;
  this.type = type;
  this.pos = pos;
  this.size = size;
  this.color = color;

  draw(this);
}

function truncate (s, d) {
  s = s.toString().split('.');
  if (d != undefined) {
    s = s[0] + '.' + s[1].substring(0, d);
  }
  else s = s[0];
  return Number(s);
}

function sanitize (s) {
  return s.replace('/', '_').replace('\\', '_').replace('(', '_').replace(')', '_');
}

function create_canvas (b, w, h, m, n) {
  console.log('creating canvas', 'canvas_' + sanitize(n));
  d3.select(b).append('svg')
    .attr('width', w * (1 + 2 * m))
    .attr('height', h * (1 + 2 * m))
    .attr('id', 'canvas_' + sanitize(n));
}

function clear_canvas () {
  var items = d3.select('svg');

  // Remove old elements:
  items.exit().remove();
}

function get_canvas (id) {
  return '#canvas_' + sanitize(id);
}

function draw (p) {
  // console.log('draw datapoint:', p.type);
  n = get_canvas(p.canvas);
  switch (p.type) {
    case 'rect':
      d3.select(n).append(p.type)
        .attr('height', p.size * 2)
        .attr('width', p.size * 2)
        .attr('x', p.pos.x - p.size)
        .attr('y', p.pos.y - p.size)
        .attr('z', p.pos.z)
        .attr('fill', p.color);
      break;
    case 'circle':
      d3.select(n).append(p.type)
        .attr('r', p.size)
        .attr('cx', p.pos.x)
        .attr('cy', p.pos.y)
        .attr('cz', p.pos.z)
        .attr('fill', p.color);
      break;
    default:
      break;
  }
}

function text (n, p, o, a, s, c, t) {
  console.log('adding text to canvas:', n, '->', t, ': (', p.x, ',', p.y, ')');
  n = get_canvas(n);
  d3.select(n).append('text')
    .text(t)
    .attr('font-size', s)
    .style('font-color', c)
    .style('text-anchor', o)
    .attr('transform', 'translate(' + p.x + ',' + p.y + ')rotate(' + a + ')');
}

function line (n, p, q, w, c) {
  console.log('adding line to canvas:', n, '-> (', p.x, p.y, ') - (', q.x, q.z, ')');
  n = get_canvas(n);
  d3.select(n).append('line')
    .attr('x1', p.x)
    .attr('y1', p.y)
    .attr('x2', q.x)
    .attr('y2', q.y)
    .attr('stroke-width', w)
    .attr('stroke', c);
}

function axis (n, p, w, c) {
  // console.log('adding axis to canvas:', n, '->', c, '-> (', p.x, p.y, ')');
  line(n, new Pos(n, -1, p.y + 0, 0), new Pos(n, 1, p.y + 0, 0), w, c);
  line(n, new Pos(n, p.x + 0, -1, 0), new Pos(n, p.x + 0, 1, 0), w, c);
}

function scale_ruler (n, l, u, o, w, c, t, d) {
  console.log('adding ruler to canvas:', n, '-> [', l, u, ']');
  let s = u - l;

  let dscalar = 1;
  while (s / dscalar > 1) { dscalar = dscalar * 10; };
  let dstep = dscalar / 10;
  let ds = truncate((s / dscalar) * 10) + 1;

  console.log('generated decimal measures', dscalar, dstep, ds);

  l = truncate((l / dscalar) * 10);

  console.log('generated bounds', l, u);

  for (let i = 0; i <= ds; i++) {
    if (i == 0) continue;

    let x1 = (o == 'v' ? -MARGIN : i / ds);
    let y1 = (o == 'h' ? -MARGIN : i / ds);
    let x2 = (o == 'v' ? 1 : i / ds);
    let y2 = (o == 'h' ? 1 : i / ds);

    line(n, new Pos(n, x1, y1, 0), new Pos(n, x2, y2, 0), w, c);
    text(n, new Pos(n, x1, y1, 0), 'left', 0, w * 5, c, truncate(dstep * (l + i), d));
  }

  console.log('generating axis title')
  text(n, new Pos(n, (o == 'v' ? -(MARGIN * 0.1) : 0.5), (o == 'h' ? -(MARGIN * 0.5) : 0.5), 0), 'middle', (o == 'v' ? -90 : 0), w * 7.5, c, t);
}

function type_ruler (n, t, o, w, c) {
  console.log('adding ruler to canvas:', n, '->', t);

  let ds = Object.keys(t).length;

  t.forEach(key => {
    let i = t.indexOf(key) + 1;
    let x1 = (o == 'v' ? -MARGIN : i / ds);
    let y1 = (o == 'h' ? -MARGIN : i / ds);
    let x2 = (o == 'v' ? 1 : i / ds);
    let y2 = (o == 'h' ? 1 : i / ds);

    line(n, new Pos(n, x1, y1, 0), new Pos(n, x2, y2, 0), w, c);
    text(n, new Pos(n, x1, y1, 0), 'middle', 0, w * 5, c, key);
  });
}

//////////////////////////////////////
// Data loading and manipulation
//////////////////////////////////////

// Static cache variables
var columns = {}
var rows = [];
var mins = {};
var maxs = {};
var scales = {};
var types = {};

function load_csv (file) {
  // Read in data
  return d3.csv(file).then((csv) => {
    // First pass to harvest
    console.log('load_csv::harvesting');
    csv.forEach((row) => {
      for (key in row) {
        let val = row[key];

        if (!(key in types)) {
          console.log('load_csv::harvesting::type:', key);
          types[key] = [];
        }
        if (!(key in mins) || !(key in maxs)) {
          console.log('load_csv::harvesting::scale:', key);
          mins[key] = Infinity;
          maxs[key] = 0;
        }

        if (isNaN(val)) {
          mins[key] = undefined;
          maxs[key] = undefined;
          if (!types[key].find((v) => { return val == v; }))
            types[key].push(val);
        }
        else {
          val = Number(row[key]);

          if (mins[key] != undefined && maxs[key] != undefined) {
            if (val > maxs[key])
              maxs[key] = val;
            if (val < mins[key])
              mins[key] = val;
          }
        }
      }
    });
    for (const key in types) {
      if (types[key].length == 0)
        types[key] = undefined;
    }
    for (const key in maxs) {
      if (mins[key] != undefined && maxs[key] != undefined)
        scales[key] = maxs[key] - mins[key];
    }
    console.log('load_csv::harvested::mins:', mins);
    console.log('load_csv::harvested::maxs:', maxs);
    console.log('load_csv::harvested::scales:', scales);
    console.log('load_csv::harvested::types:', types);

    // Second pass to sanitize and cache
    console.log('load_csv::sanitizing')
    csv.forEach(row => {
      let sanitizedrow = {};

      for (key in row) {
        if (mins[key] != undefined && maxs[key] != undefined)
          sanitizedrow[key] = (row[key] - mins[key]) / (maxs[key] - mins[key]);
        else
          sanitizedrow[key] = row[key];

        if (!(key in columns)) {
          columns[key] = [];
        }

        columns[key].push(sanitizedrow[key]);
      }

      rows.push(sanitizedrow);
    });

    console.log('load_csv::rows:', rows);
    console.log('load_csv::columns:', columns);
  });
}

function make_key_group (key, data) {
  console.log('make_key_group::key:', key);
  var group = {};

  data.forEach((row) => {
    let groupkey = row[key];

    if (!(groupkey in group)) {
      console.log('make_key_group::groupkey:', groupkey);
      group[groupkey] = [];
    }

    group[groupkey].push(row);
  });

  console.log('make_key_group::group:', group);
  return group;
}

function plot_group (group, ykey, canvas, type, size, color, min, scale, norm) {
  console.log('plot_group::canvas:', canvas);
  console.log('plot_group::group:', group, '(', ykey, color, ')');
  clear_canvas();

  let i = 1;
  let step = 1.0 / (Object.keys(group).length);
  console.log('plot_group::step:', step);

  for (key in group) {
    console.log('plot_group::key:', key);
    let groupdata = group[key];

    let xpos = i * step;

    if (ykey.length == 0) {
      DataPoint(canvas, type, new Pos(canvas, xpos, (min + (groupdata * scale)) / norm, 0), size, color);
    }
    else {
      groupdata.forEach(row => {
        if (ykey in row) {
          DataPoint(canvas, type, new Pos(canvas, xpos, (min + (row[ykey] * scale)) / norm, 0), size, color);
        }
        else {
          console.log('plot_group::foreach: not found', ykey);
        }
      });
    }

    i = i + 1;
  }
}

function plot_group_2d (group, xkey, ykey, canvas, type, size, color, disp) {
  console.log('plot_group_2d::canvas:', canvas);
  console.log('plot_group_2d::group:', group, '(', xkey, ykey, color, ')');

  data = [];

  group.forEach(row => {
    if (types[xkey] != undefined) {
      row[xkey] = ((types[xkey].indexOf(row[xkey]) + 1) / types[xkey].length);
    }

    if (types[ykey] != undefined) {
      row[ykey] = ((types[ykey].indexOf(row[ykey]) + 1) / types[ykey].length);
    }

    data.push(row);
  });
  console.log('plot_group_2d::data:', data);

  data.forEach(row => {
    DataPoint(canvas, type, new Pos(canvas, disp.x + row[xkey], disp.y + row[ykey], 0), size, color);
  });
}


function make_avg_group (key, data) {
  console.log('make_avg_group::group', data, '(', key, ')');
  var group = {};

  for (ykey in data) {
    group[ykey] = 0;

    data[ykey].forEach(row => {
      group[ykey] = group[ykey] + row[key];
    });

    group[ykey] = group[ykey] / data[ykey].length;
  }

  console.log('make_avg_group::avg', group);

  return group;
}