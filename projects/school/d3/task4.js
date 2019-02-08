
///////////////////////////////////
// Start of visualization logic
///////////////////////////////////

// Setup canvas
register_task(() => {
  let canvasid = 'task4';
  create_canvas('#' + canvasid, WIDTH, HEIGHT, MARGIN, canvasid);

  let vidgroup = make_key_group('sample', rows);
  let netgroup = make_key_group('profile', vidgroup['v7']);

  let legendheight = 0.95 + MARGIN;
  let legendsize = 16;
  let legendcolor = '#888888';
  let pointsize = 4;
  let graphcolor = '#EEEEEE';

  console.log('generating graph artifacts')

  line(canvasid, new Pos(canvasid, 0, legendheight - 0.025, 0), new Pos(canvasid, 1, legendheight - 0.025, 0), 2, legendcolor);
  text(canvasid, new Pos(canvasid, 0, legendheight, 0), 'left', legendsize, legendcolor, 'Video V7 Stalls');
  axis(canvasid, new Pt(0, 0, 0), 2, legendcolor);
  scale_ruler(canvasid, mins['numStall'], maxs['numStall'], 'v', 2, graphcolor);
  type_ruler(canvasid, types['method'], 'h', 2, graphcolor);

  console.log('plotting graph')

  colors = ['#FF8888', '#88BB88', '#8888FF', '#888888'];
  disps = [-0.03, -0.01, 0.01, 0.03];

  types['profile'].forEach(profile => {
    let i = types['profile'].indexOf(profile);
    let shape = 'rect';
    let color = colors[i];
    let disp = disps[i];

    DataPoint(canvasid, shape, new Pos(canvasid, 0.25 + 0.2 * i, legendheight + (4 / HEIGHT), 0), pointsize, color);
    text(canvasid, new Pos(canvasid, 0.3 + 0.2 * i, legendheight, 0), 'left', legendsize, legendcolor, 'Profile: ' + profile);
    plot_group_2d(netgroup[profile], 'method', 'numStall', canvasid, shape, pointsize, color, new Pt(disp, 0, 0));
  });
});
