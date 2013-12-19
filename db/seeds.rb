# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Total.destroy_all 

Total.create(year: 2002, loans: 10, grants: 500, universities: 1000)
Total.create(year: 2003, loans: 20, grants: 600, universities: 2000)
Total.create(year: 2004, loans: 30, grants: 700, universities: 3000)
Total.create(year: 2005, loans: 40, grants: 800, universities: 4000)
Total.create(year: 2006, loans: 50, grants: 900, universities: 5000)
Total.create(year: 2007, loans: 60, grants: 1000, universities: 6000)
Total.create(year: 2008, loans: 70, grants: 1100, universities: 7000)
Total.create(year: 2009, loans: 80, grants: 1200, universities: 8000)
Total.create(year: 2010, loans: 90, grants: 1300, universities: 9000)
Total.create(year: 2011, loans: 100, grants: 1400, universities: 10000)
Total.create(year: 2012, loans: 110, grants: 1500, universities: 11000)
Total.create(year: 2013, loans: 120, grants: 1600, universities:12000)