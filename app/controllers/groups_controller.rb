  class GroupsController < ApplicationController
  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(groups_params)
    if @group.save
      redirect_to root_path(@group), notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    group = Group.find(params[:id])
    # binding.pry
    if group.update(groups_params)
      redirect_to group_messages_path(group), notice: 'グループを更新しました'
    else
      render :edit
    end
  end

  private

  def groups_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end


end
