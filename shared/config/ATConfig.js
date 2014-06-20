
AccountsTemplates.removeField('login');
AccountsTemplates.addField({
    name: 'login',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email address!!!',
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    name: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lowercase and 1 uppercase',
});

AccountsTemplates.addField({
    name: 'name',
    type: 'text',
    displayName: "Full Name",
    minLength: 5,
    maxLength: 30,
});

AccountsTemplates.addField({
    name: 'phone',
    type: 'tel',
    displayName: "Phone",
    re: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    errStr: 'Invalid Phone number!',
});


AccountsTemplates.configure({
    showPlaceholders: true,
    displayFormLabels: true,
    continuousValidation: true,
    showAddRemoveServices: true,

    postSignUpRoutePath: '/profile',
    //signInRoutePath: '/signin',
    //signUpRoutePath: '/signup',
    //forgotPwdRoutePath: '/forgotpassword',
});

AccountsTemplates.init();
