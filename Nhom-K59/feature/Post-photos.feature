Feature: Post Photos
	
	As an user
	I want to post my photos in order to save memories
	So that i can chose photos and post them

		Scenario: Post
			Given the user is at the homepage
			When user choose to post photos
			And user choose from their folder
			And user submit
			Then their photos were posted