package com.InternetBanking.Exceptions;

public class UserNameExistsException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public UserNameExistsException(String message) {
		super(message);
	}

	public UserNameExistsException(String message, Throwable cause) {
		super(message, cause);
	}

}
