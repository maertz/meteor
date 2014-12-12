Package.describe({
  summary: "SHA256 implementation",
  version: "1.0.2-rc.1"
});

Package.onUse(function (api) {
  api.export('SHA256');
  api.addFiles(['sha256.js'], ['client', 'server']);
});
