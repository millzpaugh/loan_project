class CreateTotals < ActiveRecord::Migration
  def change
    create_table :totals do |t|
      t.integer :year 
      t.float :loans
      t.float :grants
      t.integer :universities  
    end
  end
end
