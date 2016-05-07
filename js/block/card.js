var $cards = document.querySelectorAll('.card');
var $cardColors = document.querySelectorAll('.card-options');

for (var i = 0; i < $cards.length; i++) {
  $cards[i].addEventListener('click', function (e) {
    var $this = e.target;
    var $card = this;
    var $cardContent = $card.querySelector('.card-content');

    if ($this.dataset.color) {
      $card.dataset.color = $this.dataset.color;

      for (var p = 0; p < $cardColors.length; p++) {
        $cardColors[p].classList.remove('isActive');
      };

      $this.classList.add('isActive');
    };

    if ($this.classList.contains('card_delete')){
      $card.remove();
    }
    if ($this.classList.contains('card_edit')){
      if($cardContent.getAttribute('contenteditable') == 'false'){
        $cardContent.setAttribute('contenteditable', 'true');
        $cardContent.focus();
        $this.classList.add('isActive');
      }else{
        $cardContent.setAttribute('contenteditable', 'false');
        $cardContent.blur();
        $this.classList.remove('isActive');
      }
    }
  });
};
