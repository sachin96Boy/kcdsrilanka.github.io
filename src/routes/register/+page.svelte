<script>
	import { onMount } from 'svelte';
	import { DropdownInput, Input, Button, BodyText, Subheading, Heading } from '$components/common';
	import { Hero, SponsorMarquee } from '$components/landing';
	import { auth, register } from '$services';
	import { loader, user, config } from '$store';
	import { modal, goto } from '$utils';

	import tshirt from '$assets/images/merch/tshirt.png';
	
	$: formData = {
		name: '',
		email: '',
		mobile: '',
		nic: '',
		organization: '',
		gender: '',
		profession: '',
		cv: '',
		mealPreference: ''
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
		if (fetched) {
			if (data) {
				goto("/")
			} else {
				document.getElementById('register-section')?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}
	});

	config.subscribe(({ REGISTRATION_ENABLED }) => {
		if (REGISTRATION_ENABLED === false) {
			modal.show({
				title: 'Registration closed!',
				body: 'Sorry, we are not accepting any more registrations for KCDSL 2023.',
				onClose: () => goto("/")
			});
		}
	});

	const onSubmit = (e) => {
		e.preventDefault();
		loader.set({ show: true });
		register(formData).then((res) => {
			loader.set({ show: false });
			if (res)
				modal.show({
					title: 'You have successfully registered!',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar mattis nunc.',
					actionText: 'Purchase Ticket',
					onClose: () => goto("/?scroll=book-tickets")
				});
		});
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
	<Hero />
	<SponsorMarquee />
	<div
		id="register-section"
		class="bg-black section-container flex flex-col lg:flex-row py-16 lg:py-24 gap-y-12 gap-x-24"
	>
		<div class="flex-1 flex flex-col gap-10 p-section-inner">
			<Heading class="text-start">Registration</Heading>
			<BodyText
				>Did you ever notice your cursor is solid when you’re typing but blinking when you’re not,
				and that is true in every text editor? There are hundreds of primitives in UI design that
				started small—little choices made by designers—and later turned into norms used by the
				industry.</BodyText
			>
			<div class="gradient-background-dark p-10">
				<div class="flex flex-col bg-card border border-white/10 p-8 py-10 gap-5">
					<div class="flex gap-5 mb-2 overflow-x-auto hide-scrollbar">
						<img alt="adobe" src={tshirt} class="flex-1 rounded-sm"/>
						<img alt="adobe" src={tshirt} class="flex-1 rounded-sm"/>
						<img alt="adobe" src={tshirt} class="flex-1 rounded-sm"/>
					</div>
					<Subheading>More from KCD Sri Lanka</Subheading>
					<BodyText
						>Did you ever notice your cursor is solid when you’re typing but blinking when you’re not,
						and that is true in every text editor? There are hundreds of primitives in UI design that
						started small—little choices made by designers—and later turned into norms used by the
						industry.</BodyText
					>
					<Button variant="secondary" class="self-center xl:self-start mt-1">Shop Merch</Button>
				</div>
			</div>
		</div>
		<form class="flex-1 flex flex-col gap-y-5 -translate-y-5" on:submit={onSubmit}>
			<Subheading class="my-6">General</Subheading>
			<Input name="name" value={formData.name} placeholder="Name *" required {onChange} />
			<Input
				type="email"
				name="email"
				value={formData.email}
				placeholder="Email*"
				required
				disabled
				{onChange}
			/>
			<p class="my-2 ml-5 text-white/40">
				Note: This field is autofilled with your Google account email. If you want to use a
				different email, please sign out and sign in
			</p>
			<Input name="mobile" value={formData.mobile} placeholder="Mobile *" required {onChange} />
			<Input name="nic" value={formData.nic} placeholder="NIC / Passport *" required {onChange} />
			<DropdownInput
				name="gender"
				value={formData.gender}
				placeholder="Gender *"
				required
				{onChange}
				options={[
					{
						label: 'Male',
						value: 'male'
					},
					{
						label: 'Female',
						value: 'female'
					},
					{
						label: 'Other',
						value: 'other'
					},
					{
						label: 'Prefer not to say',
						value: 'null'
					}
				]}
			/>
			<Subheading class="my-6">Professional Details</Subheading>
			<DropdownInput
				name="profession"
				value={formData.profession}
				placeholder="Profession *"
				required
				{onChange}
				options={[
					{
						label: 'School / High School Student',
						value: 'student'
					},
					{
						label: 'Undergraduate / Post graduate Student',
						value: 'university_student'
					},
					{
						label: 'Employed',
						value: 'employed'
					}
				]}
			/>
			<Input
				name="organization"
				value={formData.organization}
				placeholder={formData.profession === 'employed'
					? 'Company name *'
					: 'School/University Name *'}
				required
				{onChange}
			/>
			<Input
				name="linkedInUsername"
				value={formData.linkedInUsername}
				placeholder="LinkedIn profile"
				{onChange}
			/>
			<Input
				name="githubUsername"
				value={formData.githubUsername}
				placeholder="GitHub handle"
				{onChange}
			/>
			<Input name="cv" value={formData.cv} placeholder="Resume URL" {onChange} />
			<p class="mt-2 ml-5 text-white/40">
				Note: If you wish to be contacted by recruiters you may add in a link to your CV. This field
				is optional
			</p>
			<Subheading class="my-6">Extra</Subheading>
			<DropdownInput
				name="mealPreference"
				value={formData.mealPreference}
				placeholder="Meal preference *"
				required
				{onChange}
				options={[
					{
						label: 'Non Vegetarian',
						value: 'non_veg'
					},
					{
						label: 'Vegetarian',
						value: 'veg'
					}
				]}
			/>
			<Button
				class="self-start my-6"
				variant="secondary"
				aria-label="Complete Registration"
				type="submit"
			>
				Complete Registration
			</Button>
		</form>
	</div>
</section>
