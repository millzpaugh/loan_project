class CreateTotals < ActiveRecord::Migration
  def change
    create_table :totals do |t|
      t.integer :year 
      t.float :loans
      t.float :grants
      t.float :total_aid 
      t.integer :lpercent
      t.integer :gpercent 
      t.integer :universities  
    end
  end
end
