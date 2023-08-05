<script>
	import { onMount } from 'svelte';
	import { RadioInput, Button } from '$components/common';
	import { Input, InputLabel, InputWrapper } from '$components/register';
	import { auth, register } from '$services';
	import { user } from '$store';

	$: formData = {
		name: '',
		email: '',
		mobile: '',
		nic: '',
		organization: '',
		gender: 'male',
		profession: 'student',
		cv: '',
		tshirtSize: 'xxxs',
		mealPreference: 'non_veg'
	};

	onMount(() => {
		auth.onAuthStateChanged(async function (firebaseUser) {
			if (firebaseUser != null) {
				formData.name = firebaseUser.displayName;
				formData.email = firebaseUser.email;
			}
		});
	});

	user.subscribe(({ data, fetched }) => {
		if (fetched && !data) {
			window.location.href = '/';
		}
	});

	const onSubmit = (e) => {
		e.preventDefault();
		register(formData);
	};

	const onChange = (e) => {
		formData = {
			...formData,
			[e.target.name]: e.target.value
		};
	};
</script>

<svelte:head>
	<title>Register | KCDSL</title>
	<meta name="description" content="Kubernetes Community Days Sri Lanka 2023" />
</svelte:head>

<section>
	<form class="flex-1 flex flex-col p-section-container py-6 lg:py-24" on:submit={onSubmit}>
		<section id="section-one" class="pb-10 bg-black/40 backdrop-blur-md rounded-2xl">
			<div class="border rounded-2xl border-white/20 overflow-hidden">
				<div
					class="section-header flex justify-between items-center p-[30px] md:py-[23px] md:pl-12 bg-purple"
				>
					<h2 class="font-medium text-white sm:text-2xl md:text-4xl">General</h2>
				</div>
				<dl id="container-one" class="px-[30px] pb-[50px] pt-5 md:px-12 md:pb-10 md:pt-[42px]">
					<InputWrapper>
						<InputLabel>Name *</InputLabel>
						<Input
							name="name"
							value={formData.name}
							placeholder="Enter your name"
							required
							{onChange}
						/>
					</InputWrapper>
					<InputWrapper>
						<InputLabel>Email *</InputLabel>
						<Input
							type="email"
							name="email"
							value={formData.email}
							placeholder="someone@example.com"
							required
							disabled
							{onChange}
						/>
					</InputWrapper>
					<InputWrapper>
						<InputLabel>NIC *</InputLabel>
						<Input name="nic" value={formData.nic} placeholder="199710031052" required {onChange} />
					</InputWrapper>
					<InputWrapper>
						<InputLabel>Mobile *</InputLabel>
						<Input
							name="mobile"
							value={formData.mobile}
							placeholder="0762345678"
							required
							{onChange}
						/>
					</InputWrapper>
					<div class="pt-[14px] pr-12 pb-[14px]">
						<InputLabel>Gender *</InputLabel>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2 flex flex-col gap-4 text-lg">
								<RadioInput
									id="male"
									name="gender"
									defaultValue={formData.gender}
									value="male"
									label="Male"
									required
									{onChange}
								/>
								<RadioInput
									id="female"
									name="gender"
									defaultValue={formData.gender}
									value="female"
									label="Female"
									required
									{onChange}
								/>
								<RadioInput
									id="other"
									name="gender"
									defaultValue={formData.gender}
									value="other"
									label="Other"
									required
									{onChange}
								/>
								<RadioInput
									id="not-to-say"
									name="gender"
									defaultValue={formData.gender}
									value="null"
									label="Prefer not to say"
									required
									{onChange}
								/>
							</div>
						</dd>
					</div>
				</dl>
			</div>
		</section>
		<section id="section-two" class="pb-10">
			<div class="border rounded-2xl border-white/20 overflow-hidden">
				<div
					class="section-header flex justify-between items-center p-[30px] md:py-[23px] md:pl-12 bg-purple"
				>
					<h2 class="font-medium text-white sm:text-2xl md:text-4xl">Professional Details</h2>
				</div>
				<dl id="container-two" class="px-[30px] pb-[50px] pt-5 md:px-12 md:pb-10 md:pt-[42px]">
					<InputWrapper>
						<InputLabel>Profession *</InputLabel>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2 flex flex-col gap-4 text-lg">
								<RadioInput
									id="student"
									name="profession"
									defaultValue={formData.profession}
									value="student"
									label="School / High School Student"
									required
									{onChange}
								/>
								<RadioInput
									id="uni-student"
									name="profession"
									defaultValue={formData.profession}
									value="university_student"
									label="Undergraduate / Post graduate Student"
									required
									{onChange}
								/>
								<RadioInput
									id="employee"
									name="profession"
									defaultValue={formData.profession}
									value="employed"
									label="Employed"
									required
									{onChange}
								/>
							</div>
						</dd>
					</InputWrapper>
					<InputWrapper>
						<dt>
							<div class="flex justify-between items-start w-full text-left">
								<span class="font-medium text-white sm:text-xl md:text-2xl">
									{formData.profession === 'employed' ? 'Company name' : 'School/University Name'} *
								</span>
							</div>
						</dt>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2">
								<Input
									name="organization"
									value={formData.organization}
									placeholder={formData.profession === 'employed'
										? 'The Company Inc.'
										: 'XYZ Institute'}
									required
									{onChange}
								/>
							</div>
						</dd>
					</InputWrapper>
					<InputWrapper>
						<InputLabel>LinkedIn Username</InputLabel>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2">
								<Input
									name="linkedInUsername"
									value={formData.linkedInUsername}
									placeholder="john-doe-123456789"
									{onChange}
								/>
							</div>
						</dd>
					</InputWrapper>
					<InputWrapper>
						<InputLabel>GitHub Username</InputLabel>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2">
								<Input
									name="githubUsername"
									value={formData.githubUsername}
									placeholder="john-doe-123456789"
									{onChange}
								/>
							</div>
						</dd>
					</InputWrapper>
					<div class="pt-[14px] pr-12 pb-[14px]">
						<InputLabel>Link to Resume</InputLabel>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2">
								<Input
									name="cv"
									value={formData.cv}
									placeholder="https://drive.google.com/file/d/1Z0NQ7eGaO3d/view"
									{onChange}
								/>
							</div>
						</dd>
						<div class="mb-2">
							<p>
								Note: If you wish to be contacted by recruiters you may add in a link to your CV.
								This field is optional
							</p>
						</div>
					</div>
				</dl>
			</div>
		</section>
		<section id="section-three" class="pb-10">
			<div class="border rounded-2xl border-white/20 overflow-hidden">
				<div
					class="section-header flex justify-between items-center p-[30px] md:py-[23px] md:pl-12 bg-purple"
				>
					<h2 class="font-medium text-white sm:text-2xl md:text-4xl">Extra</h2>
				</div>
				<dl id="container-three" class="px-[30px] pb-[50px] pt-5 md:px-12 md:pb-10 md:pt-[42px]">
					<InputWrapper>
						<InputLabel>T-Shirt size *</InputLabel>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2 flex flex-col gap-4 text-lg">
								<RadioInput
									id="tripple-extra-small"
									nam="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="xxxs"
									label="Tripple Extra small (XXXS)"
									required
									{onChange}
								/>
								<RadioInput
									id="double-extra-small"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="xxs"
									label="Double Extra small (XXS)"
									required
									{onChange}
								/>
								<RadioInput
									id="extra-small"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="xs"
									label="Extra small (XS)"
									required
									{onChange}
								/>
								<RadioInput
									id="small"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="s"
									label="Small (S)"
									required
									{onChange}
								/>
								<RadioInput
									id="medium"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="m"
									label="Medium (M)"
									required
									{onChange}
								/>
								<RadioInput
									id="large"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="l"
									label="Large (L)"
									required
									{onChange}
								/>
								<RadioInput
									id="extra-large"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="xl"
									label="Extra large (XL)"
									required
									{onChange}
								/>
								<RadioInput
									id="double-extra-large"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="xxl"
									label="Double extra large (XXL)"
									required
									{onChange}
								/>
								<RadioInput
									id="tripple-extra-large"
									name="tshirtSize"
									defaultValue={formData.tshirtSize}
									value="xxxl"
									label="Tripple extra large (XXXL)"
									required
									{onChange}
								/>
							</div>
							<div class="mb-2 pt-2">
								<button type="button" class="underline"> SIZE CHART </button>
							</div>
						</dd>
					</InputWrapper>
					<div class="pt-[14px] pr-12 pb-[14px]">
						<InputLabel>Meal preference *</InputLabel>
						<dd class="mt-4 mb-[18px] md:mt-5">
							<div class="mb-2 flex flex-col gap-4 text-lg">
								<RadioInput
									id="non-veg"
									name="mealPreference"
									defaultValue={formData.mealPreference}
									value="non_veg"
									label="Non Vegetarian 🥩"
									required
									{onChange}
								/>
								<RadioInput
									id="veg"
									name="mealPreference"
									defaultValue={formData.mealPreference}
									value="veg"
									label="Vegetarian 🌿"
									required
									{onChange}
								/>
							</div>
						</dd>
					</div>
				</dl>
			</div>
		</section>
		<section id="section-four" class="pb-10">
			<div class="border rounded-2xl border-white/20 overflow-hidden">
				<div id="container-four" class="px-[30px] pb-[50px] pt-5 md:px-12 md:pb-10 md:pt-[42px]">
					<div class="flex flex-col gap-4">
						<p>
							Note: All the required fields are marked with * and you can&apos;t proceed without
							filling them.
						</p>
						<Button
							class="mt-2 py-3 px-4 rounded-xl text-white after:rounded-xl after:opacity-[0.1] font-medium bg-purple hover:brightness-125 transition duration-200 ease-in-out"
							aria-label="Complete Registration"
							type="submit"
						>
							Complete Registration
						</Button>
					</div>
				</div>
			</div>
		</section>
	</form>
</section>
