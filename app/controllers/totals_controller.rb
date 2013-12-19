class TotalsController < ApplicationController
  
  def index 
    @totals = Total.all 
    respond_to do |format|
      format.html 
      format.json {render json: @totals}
    end
  end 

end 