import comp from "/Users/xuesenpan/Desktop/my-projects/blog/docs/.vuepress/.temp/pages/posts/article5.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article5.html\",\"title\":\"Article 5\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-05T00:00:00.000Z\",\"category\":[\"CategoryA\",\"CategoryB\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1740023011000,\"contributors\":[{\"name\":\"潘学森\",\"username\":\"潘学森\",\"email\":\"panxuesen@tojoy.com\",\"commits\":1,\"url\":\"https://github.com/潘学森\"}]},\"filePathRelative\":\"posts/article5.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
