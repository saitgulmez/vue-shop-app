<template>
<p>
	<a class="btn btn-primary m-3" data-bs-toggle="collapse" href="#example1" 
	role="button" aria-expanded="false" aria-controls="example1">Toggle first element</a>
	<button class="btn btn-primary m-3" type="button" data-bs-toggle="collapse" data-bs-target="#example2" aria-expanded="false" aria-controls="example2">Toggle second element</button>
	<button class="btn btn-primary m-3" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="example1 example2">Toggle both elements</button>
</p>
	<div class="row">
		<div class="col-2">
			<div class="collapse multi-collapse" id="example1">
				<div class="card card-body">
					Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
				</div>
			</div>
		</div>
		<div class="col-2">
			<div class="collapse multi-collapse" id="example2">
				<div class="card card-body">
					Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<a class="btn btn-primary" href="#cat" role="button" data-bs-toggle="collapse" data-bs-target="#cat" aria-expanded="false" aria-controls="cat">hide</a>
			<div class="collapse"  id="cat">
				<div class="card bg-success" style="width: 18rem;">
					<img src="../../images/cat.jpeg" class="card-img-top " style="width: 10rem" alt="...">
					<div class="card-body bg-warning">
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
