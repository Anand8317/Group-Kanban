class Comment {
  constructor(itemId, username, comment) {
    this.item_id = itemId;
    this.username = username;
    this.comment = comment;
  }

  // post new comment...
    postComment = async (commentObject) => {
      const appId = 'YbqlchYfwG2Z8zqcNCrW';
      const endpoint = `apps/${appId}/comments`;
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${endpoint}`;
      const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(commentObject),
        headers: { 'Content-Type': 'application/json' },
      });
      await response.json();
    };
}
export default Comment;