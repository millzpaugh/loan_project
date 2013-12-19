class Total < ActiveRecord::Base 
  
  def funding_sum_by_year 
    @total = Total.new 
  end 
end 