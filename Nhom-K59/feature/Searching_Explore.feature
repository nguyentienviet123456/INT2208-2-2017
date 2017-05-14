Feature: Searching and Explore 
	As an user
	I want to looking for my friend and explore people
	So I have to login

	Scenario: Search people
		Given: When people at homepage 
		When: People click on "searching" symbol
		And: User enter name of another one on "search box"
		Then: Display list people have the same name
	
	Scenario: Explore people
		Given: When people at homepage
		When: People click on "searching" symbol
		Then: People see list of users get the most likes on their picture