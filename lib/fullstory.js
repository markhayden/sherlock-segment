
/**
 * FullStory.
 */

exports.name = 'FullStory';

exports.script = /https:\/\/www\.fullstory\.com\/s\/fs\.js/;

exports.settings = function () {
  var org = window._fs_org;
  if (!org) return false;

  return { org: org };
};
