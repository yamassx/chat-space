$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image){
      if (message.text){
        
        var html = `<div class="message" data-message-id = ${message.id}>
                      <div class="main_chat__messages__message">
                        <div class="main_chat__messages__message__upper">
                          <div class="main_chat__messages__message__upper__user_name">
                            ${message.user_name}
                          </div>
                          <div class="main_chat__messages__message__upper__timestamp">
                            ${message.created_at}
                          </div>
                        </div>
                        <div class="main_chat__messages__message__text">
                          <div class="main_chat__messages__message__text__content">
                            ${message.text}
                          </div>  
                          <img class="lower-message__image" src=${message.image} alt="Images">
                        </div>
                      </div>
                    </div>`
      }
      else {
        var html = `<div class="message" data-message-id = ${message.id}>
                      <div class="main_chat__messages__message">
                        <div class="main_chat__messages__message__upper">
                          <div class="main_chat__messages__message__upper__user_name">
                            ${message.user_name}
                          </div>
                          <div class="main_chat__messages__message__upper__timestamp">
                            ${message.created_at}
                          </div>
                        </div>
                        <img class="lower-message__image" src=${message.image} alt="Images">
                      </div>
                    </div>`
      }
    }
    else {
      var html = `<div class="message" data-message-id = ${message.id}>
                    <div class="main_chat__messages__message">
                      <div class="main_chat__messages__message__upper">
                        <div class="main_chat__messages__message__upper__user_name">
                          ${message.user_name}
                        </div>
                        <div class="main_chat__messages__message__upper__timestamp">
                          ${message.created_at}
                        </div>
                      </div>
                      <div class="main_chat__messages__message__text">
                        <div class="main_chat__messages__message__text__content">
                          ${message.text}
                        </div>
                      </div>
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
      $('.form__submit').prop('disabled', false);
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
  });
  var reloadMessages = function() {
    
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length != 0) {
        //追加するHTMLの入れ物を作る
        var insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        messages.forEach(function(message){
          insertHTML += buildHTML(message)
        });
        $('.main_chat__messages').append(insertHTML);
        $('.main_chat__messages').animate({ scrollTop: $('.main_chat__messages')[0].scrollHeight});
      }
        //メッセージが入ったHTMLに、入れ物ごと追加
    })
      .fail(function() {
        alert('error');
      }); 
  }
 
 if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  //  if (insertHTML != buildHTML) {
   setInterval(reloadMessages, 7000);
  //  }
 }
});