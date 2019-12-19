$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image){
      if (message.text){
        
        var html = `<div class="main_chat__messages__message">
                    <div class="main_chat__messages__message__upper">
                      <div class="main_chat__messages__message__upper__user_name">
                      ${message.user_name}
                      </div>
                      <div class="main_chat__messages__message__upper__timestamp">
                      ${message.created_at}
                      </div>
                    </div>
                    <div class="main_chat__messages__message__text">
                      <p class="main_chat__messages__message__text__content">
                      ${message.text}
                      </p>  
                      <img class="lower-message__image" src=${message.image} alt="Images">
                      </img>
                  </div>
                  </div>`
      }
      else {
        var html = `<div class="main_chat__messages__message">
                      <div class="main_chat__messages__message__upper">
                        <div class="main_chat__messages__message__upper__user_name">
                        ${message.user_name}
                        </div>
                        <div class="main_chat__messages__message__upper__timestamp">
                        ${message.created_at}
                        </div>
                      </div>
                      <img class="lower-message__image" src=${message.image} alt="Images">
                      </img>
                    </div>`
      }
    }
    else {
      var html = `<div class="main_chat__messages__message">
                    <div class="main_chat__messages__message__upper">
                      <div class="main_chat__messages__message__upper__user_name">
                        ${message.user_name}
                      </div>
                      <div class="main_chat__messages__message__upper__timestamp">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="main_chat__messages__message__text">
                      <p class="main_chat__messages__message__text__content">
                        ${message.text}
                      </p>
                    </div>
                  </div>`
    }
    return html
    
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault()
    
    $.ajax({
      url: $(this).attr('submit'),  
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: new FormData(this),  
      dataType: 'json',
      processData: false,
      contentType: false
    })
  
    .done(function(data){
      var html = buildHTML(data);
      $('.main_chat__messages').append(html);
      $('.main_chat__messages').animate({ scrollTop: $('.main_chat__messages')[0].scrollHeight});
      // $('.side_bar__groups').animate({ scrollTop: $('.side_bar__groups')[0].scrollHeight});
      $('.form__submit').prop('disabled', false);
      $('#new_message')[0].reset();
      // $('.form__message').val('');
    })
    .fail(function(){
      alert('error');
    })
  });
});