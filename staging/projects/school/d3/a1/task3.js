
///////////////////////////////////
// Start of visualization logic
///////////////////////////////////

// Setup canvas
register_task(() => {

  let WIDTH = 600;
  let HEIGHT = 400;

  console.log('task 3!!!')
  let canvasid = 'task3';
  let metgroup = make_key_group('method', rows);

  for (met in metgroup) {
    let canvasmetid = [canvasid, buf, met].join('_');
    create_canvas('#' + canvasid, WIDTH / 2.05, HEIGHT / 2.05, MARGIN, canvasmetid);

    let legendheight = 0.95 + MARGIN;
    let legendsize = 16;
    let legendcolor = '#888888';
    let pointsize = 4;
    let graphcolor = '#EEEEEE';

    console.log('generating graph artifacts')

    line(canvasmetid, new Pos(canvasmetid, 0, legendheight - 0.025, 0), new Pos(canvasmetid, 1, legendheight - 0.025, 0), 2, legendcolor);
    text(canvasmetid, new Pos(canvasmetid, 0, legendheight, 0), 'left', 0, legendsize, legendcolor, 'Method: ' + met);
    axis(canvasmetid, new Pt(0, 0, 0), 2, legendcolor);
    scale_ruler(canvasmetid, mins['quality'], maxs['quality'], 'v', 2, graphcolor, 'Quality');
    scale_ruler(canvasmetid, mins['inefficiency'], maxs['inefficiency'], 'h', 2, graphcolor, 'Inefficiency', 1);

    let bufgroup = make_key_group('bufSize', metgroup[met]);
    let groupcolors = ['#FF8888', '#88BB88', '#8888FF'];
    let groupshapes = ['circle', 'rect', 'cross'];
    let i = 0;

    for (buf in bufgroup) {
      console.log('plotting graph')

      let color = groupcolors[i];
      let shape = groupshapes[i];
      i++;

      plot_group_2d(bufgroup[buf], 'quality', 'inefficiency', canvasmetid, shape, pointsize, color, new Pt(0, 0, 0));

      DataPoint(canvasmetid, shape, new Pos(canvasmetid, 0.4 + (i * 0.15), legendheight + (4 / HEIGHT), 0), pointsize, color);
      text(canvasmetid, new Pos(canvasmetid, 0.425 + (i * 0.15), legendheight, 0), 'left', 0, legendsize, legendcolor, ': ' + buf);
    }
  }
});
