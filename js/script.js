var featureWidget = {
  init: function() {
    $(".tablinks").click(function() {
      let showThisContent = "#" + $(this).attr("data-toggler");
      console.log(showThisContent);
      $(showThisContent).addClass("features__content--active");
    });
  }
}


$(document).ready(featureWidget.init);
