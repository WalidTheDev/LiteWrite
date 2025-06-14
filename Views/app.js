document.addEventListener('DOMContentLoaded', () => {
  // 1) Define your toolbar
  const toolbarOptions = [
    [{ font: [] }],
    [{ header: [1, 2, 3] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    [{ align: [] }]
  ];


  // 2) Init Quill; the image-resize module auto-hooks in.
  const quill = new Quill('#editor-container', {
    theme: 'snow',
    modules: {
      toolbar: toolbarOptions,
      imageResize: {}      // no manual register needed
    }
  });


  // 3) Preview HTML
  document.getElementById('preview-button').addEventListener('click', () => {
    const out = document.getElementById('output');
    out.textContent = quill.root.innerHTML;
    out.classList.add('active');
  });


  // 4) Save (placeholder)
  document.getElementById('save-button').addEventListener('click', () => {
    console.log(quill.root.innerHTML);
    alert('Content logged to console.');
  });
});
