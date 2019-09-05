import json

def create_handler_event():
    try:
        with open('test/testevents/copy_exp_event_1.json') as f:
            event = json.load(f)
    except EnvironmentError:  # parent of IOError, OSError *and* WindowsError where available
        with open('testevents/copy_exp_event_1.json') as f:
            event = json.load(f)
    return event

def create_event2():
    try:
        with open('test/testevents/copy_exp_event_2.json') as f:
            event = json.load(f)
    except EnvironmentError:  # parent of IOError, OSError *and* WindowsError where available
        with open('testevents/copy_exp_event_2.json') as f:
            event = json.load(f)
    return event


class LambdaContextMock:
    def __init__(self):
        self.function_name = "copy_files_to_archive"
        self.function_version = 1
        self.invoked_function_arn = "arn:aws:lambda:us-west-2:065089468788:function:copy_files_to_archive:1"
