/** Todo 클래스 */

/**
 * @typedef {Object} Tag
 * @property {number} id - 아이디
 * @property {string} content - 내용
 */

/**
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료 여부
 * @property {string} category - 카테고리
 * @property {Tag[]} [tags] - 태그들
 */
class TodoList {
	/**
	 * Create todo list.
	 * @param {Todo[]} todoList - 투두 리스트
	 */
	constructor(todoList) {
		// ...
	}

	/**
	 * 할 일을 추가할 수 있다.
	 * 내용없이 추가할 수 없다.
	 * @param {string} content - 내용
	 */
	create(content) {
		// ...
	}

	/**
	 * 모든 할 일을 조회할 수 있다.
	 * ID를 기반으로 특정 할 일을 조회할 수 있다.
	 * @param {string} [id] - 아이디
	 */
	read(id) {
		// ...
	}

	/**
	 * ID를 제외한 모든 속성을 수정할 수 있다.
	 * 특정 할 일의 특정 태그를 수정할 수 있다.
	 * @param {number} id - 아이디
	 * @param {number} [tagId] - 태그 아이디
	 */
	update(id, tagId) {
		// ...
	}

	/**
	 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
	 * 특정 할 일의 특정 태그를 삭제할 수 있다.
	 * @param {number} id - 아이디
	 * @param {number} [tagId] - 태그 아이디
	 */
	delete(id, tagId) {
		// ...
	}

	/**
	 * 모든 할 일을 제거할 수 있다.
	 */
	deleteAllTodo() {
		// ...
	}

	/**
	 * 특정 할 일의 모든 태그를 제거할 수 있다.
	 * @param {number} id - 아이디
	 */
	deleteAllTags(id) {
		// ...
	}
}