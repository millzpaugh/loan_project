# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Total.destroy_all 

Total.create(year: 2003, loans: 11, grants: .4, universities: 1120)
Total.create(year: 2004, loans: 14, grants: .5, universities: 1092)
Total.create(year: 2005, loans: 17, grants: .6, universities: 1088)
Total.create(year: 2006, loans: 19, grants: .9, universities: 1083)
Total.create(year: 2007, loans: 21, grants: 1.1, universities: 1091)
Total.create(year: 2008, loans: 25, grants: 1.2, universities: 1387)
Total.create(year: 2009, loans: 29, grants: 1.6, universities: 2369)
Total.create(year: 2010, loans: 48, grants: 1.6, universities: 4266)
Total.create(year: 2011, loans: 57, grants: 2.1, universities: 5667)
Total.create(year: 2012, loans: 62, grants: 2.2, universities: 5674)
Total.create(year: 2013, loans: 69, grants: 2.6, universities: 5597)