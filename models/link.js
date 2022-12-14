function Link(url) {
  this.url = url;
  this.name = new String();
  this.live = true;
  this.keywords = new Array();
  this.picture = new String();
}

module.exports = {
  Link: Link
}
