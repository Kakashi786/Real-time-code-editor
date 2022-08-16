import React, { useEffect } from 'react'
import Codemirror from 'codemirror'
import "../../../node_modules/codemirror/lib/codemirror.css"
import "../../../node_modules/codemirror/mode/javascript/javascript.js"
import "../../../node_modules/codemirror/theme/dracula.css"
import '../../../node_modules/codemirror/addon/edit/closetag'
import '../../../node_modules/codemirror/addon/edit/closebrackets'
// import '../../../node_modules/codemirror/addon/edit/'

const Editor = () => {
  useEffect(() => {
    async function init() {
             Codemirror.fromTextArea(document.getElementById('realtimeEditor', {
              mode: {name: "javascript", json : true},
              theme:"dracula",
              autoCloseTags:true,
              autocloseBrackets: true,
              lineNumbers: true,
             }))

    }
    init()
  })
  return (
      <textarea id='realtimeEditor'></textarea>
  )
}

export default Editor