package com.controller.model;

/**
 * This is the Error response class this will be used in respose to user in any
 * exception
 * @author Tayab Hussain
 * @version 1.0
 */
public class ErrorResponse {
	private int errorCode;
	private String message;

	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
