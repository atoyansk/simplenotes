var $wrapCard = document.querySelector('.wrap-card');
var $cardOptions = document.querySelectorAll('.card-options');
$wrapCard.addEventListener('click', function (e) {
  var $this = e.target;
  var $card = $this.parentNode.parentNode.parentNode;
  var $cardContent = $card.querySelector('.card-content');

  if ($this.dataset.color) {
    $card.dataset.color = $this.dataset.color;

    for (var p = 0; p < $cardOptions.length; p++) {
      $cardOptions[p].classList.remove('isActive');
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
