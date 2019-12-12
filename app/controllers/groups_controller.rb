  class GroupsController < ApplicationController
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(groups_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def edit
    @group = Group.find(groups_params[:id])
  end

  def update
    group = Group.find(params[:id])
    group.update(groups_params)
  end

  private

  def groups_params
    params.require(:group).permit(:name, users_ids: [])
  end


end
