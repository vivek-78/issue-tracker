import { Issue } from '@prisma/client'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { Box, Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

function EditIssue({issue}:{issue: Issue}) {
  return (
    <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
  )
}

export default EditIssue