import Component from "@ember/component";

const badges = settings.badges.split("|");

export default Component.extend({
  badge1: badges[0].split(";"),
  badge2: badges[1].split(";"),
  badge3: badges[2].split(";")
});
