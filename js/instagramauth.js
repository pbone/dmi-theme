// Use the CDN or host the script yourself
// https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js
// https://matthewelsom.com/assets/js/libs/instafeed.min.js

var userFeed = new Instafeed({
  get: "user",
  userId: "1248469178",
  accessToken: "1248469178.1677ed0.220935b6ec2446a69738c7b61492c7be",
  resolution: "standard_resolution",
  template:
    '<div class="instapic"><a href="{{link}}" class="insta" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
  sortBy: "most-recent",
  limit: 3,
  links: false
});
userFeed.run();
