class MessagesController < ApplicationController

def new
end

def index

end

def create
  @message = Message.new(message_params)
end

private

def message_params
  params.require(:user, :group).permit(:image, :text)

end
