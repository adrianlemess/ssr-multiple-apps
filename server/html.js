const html = ({ body, srcPath }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script src="${srcPath}" defer></script>
  </html>
`;

export default html;