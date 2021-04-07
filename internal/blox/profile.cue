{
	_schema: {
		version: "v1"
		name: "Profile"
		namespace: "schemas.cueblox.com/people"
	}
	
	globalValue: "https://google.com"
	defaultValue: *"Hello" | string

	#Website: {
		_model: {
			plural: "websites"
			supportedExtensions: ["yaml", "yml"]
		}

		url: string
		profile_id?: string
		body?: string
	}

	#Profile: {
		_model: {
			plural: "profiles"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

		first_name: string
		last_name:  string
		age?:       int
		company?:   string
		title?:     string
		body?:      string
		social_accounts?: [...#TwitterAccount | #GitHubAccount | #MiscellaneousAccount]
	}

	#TwitterAccount: {
		network:  "twitter"
		username: string
		url:      *"https://twitter.com/\(username)" | string
	}

	#GitHubAccount: {
		network:  "github"
		username: string
		url:      *"https://github.com/\(username)" | string
	}

	#MiscellaneousAccount: {
		network: string
		url:     string
	}
}