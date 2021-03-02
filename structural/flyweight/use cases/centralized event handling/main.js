var stateManager = {

  fly: function () {
    var self = this

    $("#container")
      .unbind()
      .on("click", "div.toggle", function (e) {
        self.handleClick(e.target)
      })
  },

  handleClick: function (elem) {
    $(elem).find("span").toggle("slow");
  }
}

stateManager.fly()