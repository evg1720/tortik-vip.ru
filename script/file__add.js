function ready() {
  var inputs = document.querySelectorAll('.inputfile');
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVar = label.innerHTML;
    input.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length)
      else
        fileName = this.files[0].name;
      if (fileName)
        label.querySelector('span').innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });
  });
};
// document.addEventListener('DomContentLoaded', ready);
ready()