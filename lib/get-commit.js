module.exports = getCommit

function getCommit (state) {
  state.debug(`getting commit "${state.sha}"`)

  return state.api.repos.getCommit({
    owner: state.owner,
    repo: state.repo,
    sha: state.sha
  })

  .then(function (result) {
    const {filename, patch, blob_url} = result.data.files[0]
    state.commit = {
      message: result.data.commit.message,
      filename,
      patch,
      blobUrl: blob_url
    }

    state.debug(`found commit "${state.commit.message}". Changed file "${filename}"`)
  })
}
