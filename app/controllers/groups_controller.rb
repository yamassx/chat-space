class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    Groups.create(groups_params)
  end

  def edit
    @group = Groups.find(groups_params[:id])
  end

  def update
    group = Groups.find(params[:id])
    group.update(groups_params)
  end

  private

  def groups_params
    params.require(:groups).permit(:name, :text, :string)
  end

end
