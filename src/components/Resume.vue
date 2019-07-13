<template>
  <div class="resume" id="resume">
    <link rel="stylesheet" href="@/../node_modules/pdfjs-dist/web/pdf_viewer.css" />
    <a href="https://resume.tehj.org">
      <img src="@/assets/images/resume.png" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import {
  PDFDocumentProxy,
  PDFViewerParams,
  PDFSource,
  PDFPromise
} from "pdfjs-dist";

let PDFJS: any;
let PDFJSViewer: any;
let PDFJSWorker: any;

PDFJS = require("pdfjs-dist/build/pdf");
PDFJSViewer = require("pdfjs-dist/web/pdf_viewer");
PDFJSWorker = require("pdfjs-dist/build/pdf.worker");

@Component
export default class Resume extends Vue {
  public pdfLinkService: any;
  public pdfViewer: any;
  public pdfFindController: any;
  private _renderText: boolean = true;
  private _pdf: PDFDocumentProxy | any;
  private src: string = "@/assets/resume/Resume_Julian_Teh.pdf";

  mounted() {
    PDFJS.workerSrc = PDFJSWorker;

    let container = document.getElementById("resume");
    const pdfOptions: PDFViewerParams | any = {
      container: container,
      removePageBorders: true
    };

    this.pdfViewer = new PDFJSViewer.PDFViewer(pdfOptions);
    this.pdfLinkService = new PDFJSViewer.PDFLinkService();
    this.pdfLinkService.setViewer(this.pdfViewer);

    // this.pdfFindController = new PDFJSViewer.PDFFindController({
    //   pdfViewer: this.pdfViewer
    // });
    // this.pdfViewer.setFindController(this.pdfFindController);

    const loadingTask: any = (PDFJS as any).getDocument({ url: this.src });

    (<PDFPromise<PDFDocumentProxy>>loadingTask.promise).then(
      (pdf: PDFDocumentProxy) => {
        if (this._pdf) {
          this._pdf.destroy();
        }
        this._pdf = pdf;
        this.pdfViewer.setDocument(pdf);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  destroy() {
    this._pdf.destroy();
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
