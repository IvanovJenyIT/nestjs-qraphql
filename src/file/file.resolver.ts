import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { FileService } from './file.service'
import { FileEntity } from './entities/file.entity'
import { CreateFileInput } from './dto/create-file.input'
import { UpdateFileInput } from './dto/update-file.input'

@Resolver(() => FileEntity)
export class FileResolver {
	constructor(private readonly fileService: FileService) {}

	@Mutation(() => FileEntity)
	createFile(@Args('createFileInput') createFileInput: CreateFileInput) {
		return this.fileService.create(createFileInput)
	}

	@Query(() => [FileEntity], { name: 'file' })
	findAll() {
		return this.fileService.findAll()
	}

	@Query(() => FileEntity, { name: 'file' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.fileService.findOne(id)
	}

	@Mutation(() => FileEntity)
	updateFile(@Args('updateFileInput') updateFileInput: UpdateFileInput) {
		return this.fileService.update(updateFileInput.id, updateFileInput)
	}

	@Mutation(() => FileEntity)
	removeFile(@Args('id', { type: () => Int }) id: number) {
		return this.fileService.remove(id)
	}
}
