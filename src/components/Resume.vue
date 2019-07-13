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
  PDFJS,
  PDFDocumentProxy,
  PDFViewerParams,
  PDFPromise
} from "pdfjs-dist";

@Component
export default class Resume extends Vue {
  private src: string = "/assets/resume/Resume_Julian_Teh.pdf";

  mounted() {
    const loadingTask: any = (PDFJS as any).getDocument({ url: this.src });

    (<PDFPromise<PDFDocumentProxy>>loadingTask.promise).then(
      (pdf: PDFDocumentProxy) => {
        let container: HTMLElement = <HTMLElement>(
          (<any>document.getElementById("resume"))
        );

        const pdfOptions: PDFViewerParams = {
          container: container
        };

        PDFJS.PDFSinglePageViewer(pdfOptions);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  destroy() {}
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
