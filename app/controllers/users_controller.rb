class UsersController < ApplicationController
  def index
    @users = User.search(params[:keyword], current_user.id)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  # def show
  # end
  
  private

  def user_params
    params.require(:users).permit(:name, :email)
  end
end