class Api::PokemonController < ApplicationController

  def show
    @char = Pokemon.find_by(id: params[:id])
    render :show
  end

  def index
    @chars = Pokemon.all
    render :index
  end

end
