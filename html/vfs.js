
(_global => {

    const CONTENT = {
      "blank/manifest.xml": "<dar>\n  <documents>\n    <document id=\"manuscript\" type=\"article\" path=\"manuscript.xml\" />\n  </documents>\n  <assets>\n  </assets>\n</dar>\n",
      "blank/manuscript.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE article PUBLIC \"-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.2 20190208//EN\" \"JATS-archivearticle1.dtd\">\n<article xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ali=\"http://www.niso.org/schemas/ali/1.0\">\n  <front>\n    <article-meta>\n      <title-group>\n        <article-title />\n      </title-group>\n      <abstract />\n    </article-meta>\n  </front>\n  <body />\n  <back />\n</article>"
    }
    const SLASH = '/'.charCodeAt(0)
    class SimpleVFS {
    
      constructor() {
        this._data = CONTENT
      }
    
      readFileSync(path) {
        if (path.charCodeAt(0) === SLASH) {
          path = path.slice(1)
        }
        if (!CONTENT.hasOwnProperty(path)) {
          throw new Error('File does not exist: '+ path)
        }
        return CONTENT[path]
      }
    
      writeFileSync(path, content) {
        if (path.charCodeAt(0) === SLASH) {
          path = path.slice(1)
        }
        CONTENT[path] = content
      }
    
      existsSync(path) {
        return CONTENT.hasOwnProperty(path)
      }
    
    }
    
    _global.vfs = new SimpleVFS()
    })(typeof global !== 'undefined' ? global : window)
    