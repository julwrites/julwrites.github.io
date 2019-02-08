
///////////////////////////////////
// Start of visualization logic
///////////////////////////////////

// Setup canvas
register_task(() => {
  let canvasid = 'task3';
  let bufgroup = make_key_group('bufSize', rows);

  for (buf in bufgroup) {
    let metgroup = make_key_group('method', bufgroup[buf]);

    for (met in metgroup) {
      let canvasbufmetid = [canvasid, buf, met].join('_');
      create_canvas('#' + canvasid, WIDTH / 2.05, HEIGHT / 2.05, MARGIN, canvasbufmetid);

      let legendheight = 0.95 + MARGIN;
      let legendsize = 10;
      let legendcolor = '#888888';
      let pointsize = 2;
      let graphcolor = '#EEEEEE';

      console.log('generating graph artifacts')

      line(canvasbufmetid, new Pos(canvasbufmetid, 0, legendheight - 0.025, 0), new Pos(canvasbufmetid, 1, legendheight - 0.025, 0), 2, legendcolor);
      text(canvasbufmetid, new Pos(canvasbufmetid, 0, legendheight, 0), 'left', 0, legendsize, legendcolor, 'Buffer Configuration: ' + buf + ', ' + met);
      axis(canvasbufmetid, new Pt(0, 0, 0), 2, legendcolor);
      scale_ruler(canvasbufmetid, mins['quality'], maxs['quality'], 'v', 2, graphcolor, 'Quality');
      scale_ruler(canvasbufmetid, mins['inefficiency'], maxs['inefficiency'], 'h', 2, graphcolor, 'Inefficiency', 1);


      console.log('plotting graph')

      let shape = 'circle';
      let color = '#8888FF';
      plot_group_2d(metgroup[met], 'quality', 'inefficiency', canvasbufmetid, shape, pointsize, color, new Pt(0, 0, 0));
    }
  }
});
