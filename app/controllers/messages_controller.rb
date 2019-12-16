class MessagesController < ApplicationController
before_action :set_group
  
def new
end

def index
  @message = Message.new
  @messages = @group.messages.includes(:user)
end

def create
  @message = @group.messages.new(message_params)

  if @message.save
    redirect_to group_messages_path, notice: "メッセージが保存できたよ"
  else
    @messages = @group.messages.includes(:user)
    flash.now[:alert] = "残念！メッセージ保存失敗"
    render :index
  end
end

private

def message_params
  params.require(:message).permit(:image, :text).merge(user_id: current_user.id)
end

def set_group
  @group = Group.find(params[:group_id])
end

end
