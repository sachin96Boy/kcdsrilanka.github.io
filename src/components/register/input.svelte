<script>
	import { Input } from '$components/common';
	export let onChange = () => {};
</script>

<dd class="mt-4 mb-[18px] md:mt-5">
	<div class="mb-2">
		<Input onChange={onChange} {...$$restProps} />
	</div>
</dd>
