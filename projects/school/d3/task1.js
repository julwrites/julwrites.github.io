
///////////////////////////////////
// Start of visualization logic
///////////////////////////////////

// Setup canvas
register_task(() => {
  let canvasid = 'task1';
  let bufgroup = make_key_group('bufSize', rows);

  for (buf in bufgroup) {
    let canvasbufid = [canvasid, buf].join('_');
    create_canvas('#' + canvasid, WIDTH, HEIGHT, MARGIN, canvasbufid);

    let metgroup = make_key_group('method', bufgroup[buf]);

    let legendheight = 0.95 + MARGIN;
    let legendsize = 16;
    let legendcolor = '#888888';
    let pointsize = 2;
    let graphcolor = '#EEEEEE';

    console.log('generating graph artifacts')

    line(canvasbufid, new Pos(canvasbufid, 0, legendheight - 0.025, 0), new Pos(canvasbufid, 1, legendheight - 0.025, 0), 2, legendcolor);
    text(canvasbufid, new Pos(canvasbufid, 0, legendheight, 0), 'left', 0, legendsize, legendcolor, 'Buffer Configuration: ' + buf);
    axis(canvasbufid, new Pt(0, 0, 0), 2, legendcolor);
    scale_ruler(canvasbufid, mins['quality'], maxs['quality'], 'v', 2, graphcolor, 'Quality');
    type_ruler(canvasbufid, types['method'], 'h', 2, graphcolor);

    console.log('plotting graph')

    let qualityshape = 'circle';
    let qualitycolor = '#8888FF';
    DataPoint(canvasbufid, qualityshape, new Pos(canvasbufid, 0.525, legendheight + (4 / HEIGHT), 0), pointsize, qualitycolor);
    text(canvasbufid, new Pos(canvasbufid, 0.55, legendheight, 0), 'left', 0, legendsize, 'black', ': Average Quality');
    plot_group(metgroup, 'quality', canvasbufid, qualityshape, pointsize, qualitycolor, mins['quality'], scales['quality'], maxs['quality']);

    let changeshape = 'rect';
    let changecolor = '#FF8888';
    DataPoint(canvasbufid, changeshape, new Pos(canvasbufid, 0.775, legendheight + (4 / HEIGHT), 0), pointsize, changecolor);
    text(canvasbufid, new Pos(canvasbufid, 0.8, legendheight, 0), 'left', 0, legendsize, 'black', ': Changes in Quality');
    plot_group(metgroup, 'change', canvasbufid, changeshape, pointsize, changecolor, mins['change'], scales['change'], maxs['quality']);
  }
});