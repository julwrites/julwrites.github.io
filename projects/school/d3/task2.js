
///////////////////////////////////
// Start of visualization logic
///////////////////////////////////

// Setup canvas
register_task(() => {
  let canvasid = 'task2';
  let bufgroup = make_key_group('bufSize', rows);

  create_canvas('#' + canvasid, WIDTH, HEIGHT, MARGIN, canvasid);

  let legendheight = 0.95 + MARGIN;
  let legendsize = 16;
  let legendcolor = '#888888';
  let pointsize = 4;
  let graphcolor = '#EEEEEE';

  console.log('generating graph artifacts')

  text(canvasid, new Pos(canvasid, 0, legendheight, 0), 'left', 0, legendsize, legendcolor, 'Buffer Configuration:');
  line(canvasid, new Pos(canvasid, 0, legendheight - 0.025, 0), new Pos(canvasid, 1, legendheight - 0.025, 0), 2, legendcolor);
  axis(canvasid, new Pt(0, 0, 0), 2, legendcolor);

  let groupcolors = ['#FF8888', '#88BB88', '#8888FF'];
  let i = 0;

  let min = Infinity;
  let max = 0;

  for (buf in bufgroup) {
    let metgroup = make_key_group('method', bufgroup[buf]);
    let avggroup = make_avg_group('qoe', metgroup);

    for (const key in avggroup) {
      if (avggroup[key] < min)
        min = avggroup[key];
      if (avggroup[key] > max)
        max = avggroup[key];
    }
  }

  console.log('generating ruler with bounds', '[', min * maxs['qoe'], max * maxs['qoe'], ']')
  scale_ruler(canvasid, min * maxs['qoe'], max * maxs['qoe'], 'v', 2, graphcolor, 'Quality of Experience');
  type_ruler(canvasid, types['method'], 'h', 2, graphcolor);

  for (buf in bufgroup) {
    let metgroup = make_key_group('method', bufgroup[buf]);
    let avggroup = make_avg_group('qoe', metgroup);

    for (const key in avggroup) {
      avggroup[key] = (avggroup[key] - min) / (max - min);
    }

    let color = groupcolors[i++];
    let shape = 'circle';

    plot_group(avggroup, '', canvasid, shape, pointsize, color, 0, max - min, max - min);

    DataPoint(canvasid, shape, new Pos(canvasid, 0.3 * i - 0.025, legendheight + (4 / HEIGHT), 0), pointsize, color);
    text(canvasid, new Pos(canvasid, 0.3 * i, legendheight, 0), 'left', 0, legendsize, legendcolor, buf);
  }
});
